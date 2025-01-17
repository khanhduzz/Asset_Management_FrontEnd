function getListBreadcrumb(path: string) {
  const listPath = path.split("/");

  const breadcrumb = [];

  for (let i = 0; i < listPath.length; i++) {
    if (listPath[i] === "admin" || listPath[i] === "") {
      continue;
    }
    breadcrumb.push({
      key: listPath[i],
      title: getNameBreadcrumb(listPath[i]),
    });
  }

  if (breadcrumb.length === 0) {
    breadcrumb.push({
      key: "home",
      title: "Home",
    });
  }

  return breadcrumb;
}

function getNameBreadcrumb(key: string) {
  switch (key) {
    case "":
      return "Home";
    case "users":
      return "Manage User";
    case "assets":
      return "Manage Asset";
    case "assignments":
      return "Manage Assignment";
    case "createUser":
      return "Create User";
    case "create-asset":
      return "Create New Asset";
    case "create-assignment":
      return "Create New Assignment";
    case "edit-assignment":
      return "Edit Assignment";
    case "edit-asset":
      return "Edit Asset";
    case "returning-requests":
      return "Request for Returning";
    case "reports":
      return "Reports";
    case "edit-user":
      return "Edit User";
    default:
      return key;
  }
}

export default getListBreadcrumb;
