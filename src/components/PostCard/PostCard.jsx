import React from "react";

import { Card, Icon, Image, Divider, Menu, Table, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

function PostCard({ post, isProfile, removePost, addLike, user }) {
  const likeIndex = post.likes.findIndex(
    (like) => like.username === user.username
  );

  const clickHandler = () => {
    console.log('clickHandler')
    removePost(post._id);
  }
  const likeColor = likeIndex > -1 ? "red" : "grey";

 
  return (
    // <Card key={post._id} raised>

    //   <Image src={`${post.photoUrl}`} wrapped ui={false} />
    //   <Card.Content>
    //     <Card.Description>{post.caption}</Card.Description>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>Name: {post.name}</Card.Description>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>Floor Price: {post.floorPrice}</Card.Description>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>Volume: {post.volume}</Card.Description>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>Last 24 hours: {post.volume24hours}</Card.Description>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>Last 7 days: {post.volume7days}</Card.Description>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>Supply: {post.supply}</Card.Description>
    //   </Card.Content>
    //   <Card.Content extra textAlign={"right"}>
    //     <Icon
    //       name={"delete"}
    //       size="large"
    //       color={likeColor}
    //       onClick={clickHandler} 
    //     />
    //   </Card.Content>
    // </Card>

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
