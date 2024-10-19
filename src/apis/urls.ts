export const urls = {
  users: {
    list: "/users",
    postListId: (id: number) => `/users/${id}/posts`,
    listId: (id: number) => `/users/${id}`,
  },
  posts: {
    list: "/posts",
    postsListTags: (tag: string) => `/users/tag/${tag}`,
  },
};
