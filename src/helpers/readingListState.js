export const initialReadingListState = localStorage.getItem(
  "react-readame-reading-list"
)
  ? JSON.parse(localStorage.getItem("react-readame-reading-list"))
  : [];
