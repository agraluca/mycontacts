import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function CreatePortalWrapper({
  children,
  selector = "portal-root",
}) {
  let container = document.getElementById(selector);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", selector);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
}

CreatePortalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string,
};
