import { createContext, useContext, useEffect, useState } from 'react';
import commentsAPI from '../api/comments-api';

const CommentsContext = createContext();

export function CommentsProvider({ children, tripId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Зареждаме коментарите при mount
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await commentsAPI.getAll(tripId);
        setComments(result);
      } catch (err) {
        console.error('Failed to load comments:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [tripId]);

  const value = {
    comments,
    setComments,
    isLoading
  };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
}

// Хук за достъп от други компоненти
export function useCommentsContext() {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error('useCommentsContext must be used within a CommentsProvider');
  }
  return context;
}
