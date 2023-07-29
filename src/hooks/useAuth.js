export const useAuth = () => {
  const isLoggedIn = true;
  const isRefreshing = false;
  const user = false;
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
