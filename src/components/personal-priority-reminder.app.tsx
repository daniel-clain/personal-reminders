import React from 'react'
import { observer } from 'mobx-react';

import PriorityReminder_View from './views/priority-reminder/PriorityReminder.view';
import ReminderManagement_View from './views/reminder-management/ReminderManagement.view';

import ViewSelectors_Partial from './partials/ViewSelectors_Partial';
import CategoryManagement_View from './views/category-management/CategoryManagement_View';
import { WaitingToLogin_View } from './views/waiting-to-login/WaitingToLogin.view';
import { app } from './app';

const {userService, viewService} = app

export const PersonalPriorityReminder_App = observer(() => {
  const {activeView} = viewService

  return (
    <div className='personal-priority-reminder'>
      {!userService.user ? 
        <WaitingToLogin_View/> : ''
      }
      {userService.user ? 
        <>
          <ViewSelectors_Partial/>
          {activeView == 'Priority Reminder' ? <PriorityReminder_View /> : ''}
          {activeView == 'Reminders' ? <ReminderManagement_View/> : ''}
          {activeView == 'Categories' ? <CategoryManagement_View/>  : ''}
        </> : ''
      }
    </div>
  )
})

