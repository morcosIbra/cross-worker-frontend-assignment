import { ChangeEventHandler, FunctionComponent } from "react";

interface SearchTodosProps {
  searchQuery: string;
  onChangeSearchQuery: (query: string) => void;
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
