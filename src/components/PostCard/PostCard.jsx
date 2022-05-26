import React from "react";

import { Card, Icon, Image, Divider, Menu, Table, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

function PostCard({ post, isProfile, removePost, addLike, user }) {

  const clickHandler = () => {
    console.log('clickHandler')
    removePost(post._id);
  }
 
  return (
    <>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Floor Price</Table.HeaderCell>
        <Table.HeaderCell>Volume</Table.HeaderCell>
        <Table.HeaderCell>Volume 24 hours</Table.HeaderCell>
        <Table.HeaderCell>Volume 7 days</Table.HeaderCell>
        <Table.HeaderCell>Unique Owners</Table.HeaderCell>
        <Table.HeaderCell>Supply</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>{post.name}</Label>
        </Table.Cell>
        <Table.Cell>{post.floorPrice}</Table.Cell>
        <Table.Cell>{post.volume}</Table.Cell>
        <Table.Cell>{post.volume24hours}</Table.Cell>
        <Table.Cell>{post.volume7days}</Table.Cell>
        <Table.Cell>{post.uniqueOwners}</Table.Cell>
        <Table.Cell>{post.supply}</Table.Cell>
      </Table.Row>
      <Icon
          name={"delete"}
          size="large"
          color={likeColor}
          onClick={clickHandler} 
        />
    </Table.Body>
  </Table>
  </>


  );
}

export default PostCard;
