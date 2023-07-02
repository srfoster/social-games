'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import {stories} from './stories/index'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {

  return (
    <main className={styles.main}>
      <StoryGame story={stories.mouse_asl} />
    </main>
  )
}

function StoryGame({ story }:any) {
  let sentences = story.sentences
  const [currentSentence, setCurrentSentence] = useState<number>(0)

  return <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, backgroundPosition: "center bottom" }}
        image="/asl_mouse.jpg"
        title={ story.title }
      />
      <CardContent sx={{minHeight: 150}}>
        <Typography gutterBottom variant="h5" component="div">
          { story.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
            { currentSentence >= sentences.length ? "The End" : sentences[currentSentence]}
        </Typography>
      </CardContent>
      <CardActions
        sx={
          {
            display: "flex",
            justifyContent: "center",
          }
        }
       >
        <Button size="small"
          style={{float: "right"}}
          onClick={
            () => {
              if (currentSentence > 0)
                setCurrentSentence(sentence => sentence - 1)
            }
          }>Prev</Button>
        <Button size="small"
          onClick={
            () => {
              if (currentSentence < sentences.length)
                setCurrentSentence(sentence => sentence + 1)
            }
          }>Next</Button>
      </CardActions>
    </Card>
  </>
}