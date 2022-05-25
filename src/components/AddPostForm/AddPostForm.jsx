import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddPuppyForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    name: '',
    floorPrice: '',
    volume: '',
    volume24hours: '',
    volume7days: '',
    supply: '',

  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('name', state.name)
    formData.append('floorPrice', state.floorPrice)
    formData.append('volume', state.volume)
    formData.append('volume24hours', state.volume24hours)
    formData.append('volume7days', state.volume7days)
    formData.append('supply', state.supply)
    props.handleAddPost(formData); 
    
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
           
              <Form.Input
                  className="form-control"
                  name="name"
                  value={state.name}
                  placeholder="NFT Name"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="floorPrice"
                  value={state.floorPrice}
                  placeholder="Floor Price"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="volume"
                  value={state.volume}
                  placeholder="Volume"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="volume24hours"
                  value={state.volume24hours}
                  placeholder="Volume last 24 hours"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="volume7days"
                  value={state.volume7days}
                  placeholder="Volume last 7 days"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="supply"
                  value={state.supply}
                  placeholder="Supply"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD NFT
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}