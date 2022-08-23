import { FunctionComponent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  searchValue: string;
  onChangeSearch: (value:string) => void;
}

const Input: FunctionComponent<InputProps> = ({
  searchValue,
  onChangeSearch,
}) => {
  const onChangeHandle = (e: any) => {
    onChangeSearch(e.target.value);
  };
  return (
    <div>
      <label>Search Input: </label>
      <input value={searchValue} onChange={onChangeHandle} />
    </div>
  );
};

export default Input;
