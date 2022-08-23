import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: string[]
}

const List: FunctionComponent<ListProps> = ({items}) => {
  return <div>
    <ul>
        {items.map((item,index) => {
          return <Item key={index}> {item} </Item>;
        })}
      </ul>
  </div>;
};

export default List;
