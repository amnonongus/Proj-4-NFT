import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as postsAPI from "../../utils/postApi";
import * as likeAPI from '../../utils/likeApi';




import { Grid } from "semantic-ui-react";



export default function Feed({user, handleLogout}) {
  console.log(postsAPI, " <-- postsAPI")
  const [posts, setPosts] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  async function addLike(postId){
    try {
      const data = await likeAPI.create(postId)
      console.log(data, ' <- the response from the server when we make a like');
      getPosts(); // <- to go get the updated posts with the like
    } catch(err){
      console.log(err)
      setError(err.message)
    }
  }




  async function handleAddPost(post) {
    try {
      setLoading(true);
      const data = await postsAPI.create(post); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddPost");
      setPosts([data.post, ...posts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  // R read in crud
  async function getPosts() {
    try {
      const data = await postsAPI.getAll();
      console.log(data, " this is data,");
      setPosts([...data.posts]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getPosts();
  }, []);



  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <Loading />
      </>
    );
  } 

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450}}>
          <AddPostForm handleAddPost={handleAddPost} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ marginTop: 225 }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <PostGallery
            posts={posts}
            numPhotosCol={1}
            isProfile={false}
            loading={loading}
            addLike={addLike}
            removeLike={removeLike}
            user={user}
          /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
