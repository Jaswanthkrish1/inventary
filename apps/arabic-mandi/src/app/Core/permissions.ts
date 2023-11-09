export const Permissions: any = {
  roles: {
    admin: {
      permissions: ["dashboard", "createOrder", "updateOrder", "createUser", "updateUser", "assignRoles"]
    },
    user: {
      permissions: ["viewOrders"]
    },
    server: {
      permissions: ["viewOrders"]
    }
  }
};
