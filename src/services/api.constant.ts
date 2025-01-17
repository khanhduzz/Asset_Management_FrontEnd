export class APIConstants {
  static AUTH = {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout"
  };

  static USER = {
    GET_USERS: "/users",
    GET_USER_ASSIGN: "/users/assign",
    UPDATE_USER: "/user",
    EDIT_USER: (id: number) => `/users/${id}`,
    GET_USER_BY_ID: (id: number) => `/users/${id}`,
    CREATE_USER: "/users",
    GENERATE_USERNAME: "/users/generate-username",
    FIRST_CHANGE_PASSWORD: `/users/first-change-password`,
    CHANGE_PASSWORD: `/users/change-password`,
    DELETE_USER: (id: number) => `/users/${id}`,
    VALID_ASSIGNMENT: (id: number) => `/users/${id}/has-assignments`
  };

  static LOCATION = {
    GET_ALL_LOCATIONS: "/locations",
    CREATE_LOCATION: "/locations",
  };

  static CATEGORY = {
    GET_ALL_CATEGORIES: "/categories",
    CREATE_CATEGORY: "/categories",
  };
  static ASSET = {
    CREATE_ASSET: "/assets",
    GET_ASSETS: "/assets",
    DELETE_ASSET: (id: number) => `/assets/${id}`,
    GET_ASSET_HISTORY: (id: number) => `assets/exist-assignments/${id}`,
    EDIT_ASSET: (id: number) => `/assets/${id}`,
    GET_ASSET: (id : number) => `/assets/${id}`,
  };

  static ASSIGNMENT = {
    HISTORY: (assetId: number) => `/assignments/${assetId}/history`,
    CREATE_ASSIGNMENT: "/assignments",
    GET_ASSIGNMENTS: "/assignments",
    DELETE_ASSIGNMENT: (id: number) => `/assignments/${id}`,
    GET_ASSIGNMENT: (assignmentId: number) => `/assignments/${assignmentId}`,
    UPDATE_ASSIGNMENT: (assignmentId: number) => `/assignments/${assignmentId}`,
    GET_MY_ASSIGNMENTS: "/assignments/me",
    CHANGE_STATE: (id: number) => `/assignments/${id}`,
  };

  static RETURNING_REQUEST = {
    GET_RETURNING_REQUESTS: "/returning-requests",
    CANCEL_RETURNING_REQUEST: (id: number) => `/returning-requests/${id}`,
    COMPLETE_RETURNING_REQUEST: (id: number) =>
      `/returning-requests/${id}/complete`,
    CREATE_RETURNING_REQUEST_HOME_PAGE: (id: number) =>
      `/returning-requests/${id}`,
    CREATE_RETURNING_REQUEST_ADMIN_PAGE: (id: number) =>
      `/returning-requests/demand/${id}`,
  };

  static REPORT = {
    GET_REPORTS: "/reports",
    EXPORT_REPORT: "/reports/export",
  };

}
