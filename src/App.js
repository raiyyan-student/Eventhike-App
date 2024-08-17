import React from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import EventListingPage from './Components/EventListingPage'
import EventDetailsPage from './Components/EventDetailsPage'
import EventCreationPage from './Components/EventCreationPage'
import UserAccountPage from './Components/UserAccountPage'
import AdminPanel from './Components/AdminPanel'

const App = () => {

  return (
    <div>
      <LandingPage/>
      <EventListingPage/>
      <EventDetailsPage/>
      <EventCreationPage/>
      <UserAccountPage/>
      <AdminPanel/>
    </div>
  )
}

export default App