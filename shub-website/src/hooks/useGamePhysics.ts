import { useState, useEffect, useCallback } from 'react';

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Collectible {
  x: number;
  y: number;
  size: number;
  id: string;
  collected: boolean;
}

interface GameState {
  playerX: number;
  playerY: number;
  velocityY: number;
  velocityX: number;
  isJumping: boolean;
  direction: 'left' | 'right';
  score: number;
  collectedItems: string[];
  lastCollectedId: string | null;
}

const GRAVITY = 0.6;
const JUMP_STRENGTH = -15;
const MOVE_SPEED = 5;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 50;
const GAME_WIDTH = 1200;
const GAME_HEIGHT = 600;
const GROUND_Y = GAME_HEIGHT - 80;

export const useGamePhysics = (platforms: Platform[], collectibles: Collectible[]) => {
  const [gameState, setGameState] = useState<GameState>({
    playerX: 100,
    playerY: GROUND_Y - PLAYER_HEIGHT,
    velocityY: 0,
    velocityX: 0,
    isJumping: false,
    direction: 'right',
    score: 0,
    collectedItems: [],
    lastCollectedId: null,
  });

  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  // Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key]: true }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Collision detection
  const checkCollision = useCallback(
    (x: number, y: number, width: number, height: number, platform: Platform) => {
      return (
        x < platform.x + platform.width &&
        x + width > platform.x &&
        y < platform.y + platform.height &&
        y + height > platform.y
      );
    },
    []
  );

  // Check if player is on a platform
  const checkOnPlatform = useCallback(
    (x: number, y: number) => {
      const playerBottom = y + PLAYER_HEIGHT;

      // Check ground
      if (playerBottom >= GROUND_Y) {
        return { onPlatform: true, platformY: GROUND_Y };
      }

      // Check platforms
      for (const platform of platforms) {
        if (
          x + PLAYER_WIDTH > platform.x &&
          x < platform.x + platform.width &&
          playerBottom >= platform.y &&
          playerBottom <= platform.y + 10 &&
          gameState.velocityY >= 0
        ) {
          return { onPlatform: true, platformY: platform.y };
        }
      }

      return { onPlatform: false, platformY: null };
    },
    [platforms, gameState.velocityY]
  );

  // Check collectible collision
  const checkCollectibleCollision = useCallback(
    (x: number, y: number) => {
      const collectedIds: string[] = [];

      collectibles.forEach((collectible) => {
        if (
          !collectible.collected &&
          x < collectible.x + collectible.size &&
          x + PLAYER_WIDTH > collectible.x &&
          y < collectible.y + collectible.size &&
          y + PLAYER_HEIGHT > collectible.y
        ) {
          collectedIds.push(collectible.id);
        }
      });

      return collectedIds;
    },
    [collectibles]
  );

  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameState((prev) => {
        let newVelocityX = 0;
        let newDirection = prev.direction;

        // Horizontal movement
        if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
          newVelocityX = -MOVE_SPEED;
          newDirection = 'left';
        } else if (keys['ArrowRight'] || keys['d'] || keys['D']) {
          newVelocityX = MOVE_SPEED;
          newDirection = 'right';
        }

        // Calculate new position
        let newX = prev.playerX + newVelocityX;
        let newY = prev.playerY + prev.velocityY;
        let newVelocityY = prev.velocityY + GRAVITY;

        // Boundary check
        newX = Math.max(0, Math.min(GAME_WIDTH - PLAYER_WIDTH, newX));

        // Check platform collision
        const { onPlatform, platformY } = checkOnPlatform(newX, newY);

        let newIsJumping = prev.isJumping;

        if (onPlatform && platformY !== null) {
          newY = platformY - PLAYER_HEIGHT;
          newVelocityY = 0;
          newIsJumping = false;

          // Jump
          if (keys['ArrowUp'] || keys['w'] || keys['W'] || keys[' ']) {
            newVelocityY = JUMP_STRENGTH;
            newIsJumping = true;
          }
        } else {
          newIsJumping = true;
        }

        // Check collectible collision
        const newCollectedIds = checkCollectibleCollision(newX, newY);
        const allCollectedItems = [...new Set([...prev.collectedItems, ...newCollectedIds])];

        // Get the newly collected item (first one that's not already in the list)
        const newlyCollected = newCollectedIds.find(id => !prev.collectedItems.includes(id)) || null;

        return {
          playerX: newX,
          playerY: newY,
          velocityY: newVelocityY,
          velocityX: newVelocityX,
          isJumping: newIsJumping,
          direction: newDirection,
          score: allCollectedItems.length * 100,
          collectedItems: allCollectedItems,
          lastCollectedId: newlyCollected,
        };
      });
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(gameLoop);
  }, [keys, checkOnPlatform, checkCollectibleCollision]);

  const clearLastCollected = () => {
    setGameState(prev => ({ ...prev, lastCollectedId: null }));
  };

  return {
    playerX: gameState.playerX,
    playerY: gameState.playerY,
    isJumping: gameState.isJumping,
    direction: gameState.direction,
    score: gameState.score,
    collectedItems: gameState.collectedItems,
    lastCollectedId: gameState.lastCollectedId,
    clearLastCollected,
  };
};
