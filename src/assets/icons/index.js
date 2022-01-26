import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const search = (
  <FontAwesomeIcon className="text-white" icon={faSearch} aria-hidden="true" />
);

export const book = (
  <FontAwesomeIcon
    className="text-white"
    icon={faBookOpen}
    aria-hidden="true"
  />
);

export const bug = (
  <FontAwesomeIcon className="text-white" icon={faBug} aria-hidden="true" />
);

export const info = <FontAwesomeIcon icon={faInfoCircle} aria-hidden="true" />;

export const close = (
  <FontAwesomeIcon icon={faWindowClose} aria-hidden="true" />
);

export const times = <FontAwesomeIcon icon={faTimes} aria-hidden="true" />;
