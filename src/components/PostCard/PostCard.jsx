import React from "react";
import { Card, Icon, Image, Divider, Header, Table, Segment } from "semantic-ui-react";
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
    <Segment inverted>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Description
      </Header>
    </Divider>

    <p>
      Doggie treats are good for all times of the year. Proven to be eaten by
      99.9% of all dogs worldwide.
    </p>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Size</Table.Cell>
          <Table.Cell>1" x 2"</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Weight</Table.Cell>
          <Table.Cell>6 ounces</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Color</Table.Cell>
          <Table.Cell>Yellowish</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Odor</Table.Cell>
          <Table.Cell>Not Much Usually</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </Segment>
  </>


  );
}

export default PostCard;
