import { FunctionComponent } from "react";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  children: React.ReactNode
}

const Item: FunctionComponent<ItemProps> = ({children}) => {
  return <li>{children}</li>;
};

export default Item;
