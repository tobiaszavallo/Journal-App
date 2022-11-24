import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";



export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/*<Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quaerat pariatur reprehenderit? In quis, dolorem itaque accusantium sapiente aut nemo autem, non error tempora quidem, cupiditate voluptatibus dicta rem! Unde.</Typography> */}

      <NothingSelectedView /> 
      {/* <NoteView /> */}


      <IconButton 
        size='larg'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }} 
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>
  )
}
