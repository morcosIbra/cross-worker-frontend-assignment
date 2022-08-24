import { ChangeEventHandler, FunctionComponent } from "react";

import { Todo } from "../..";

interface SearchTodosProps {
  searchQuery: Todo['label'];
  onChangeSearchQuery: (query: Todo['label']) => void;
}

const SearchTodos: FunctionComponent<SearchTodosProps> = ({
  searchQuery,
  onChangeSearchQuery,
}) => {
  const onChangeSearchQueryHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        value={searchQuery}
        type="text"
        placeholder="Search Todos List"
        onChange={onChangeSearchQueryHandle}
      />
    </div>
  );
};

export default SearchTodos;
