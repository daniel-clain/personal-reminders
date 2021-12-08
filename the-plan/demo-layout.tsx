
<personal-priorityReminder-app>
  <view-selectors>
    <view-selector 
      onSelect={setView('priorityReminder')} 
      name='PriorityReminder'/>
    <view-selector 
      onSelect={setView('reminder management')} 
      name='Reminder Management'/>
    <view-selector 
      onSelect={setView('category management')} 
      name='Category Management'/>
  </view-selectors>

  {ifSelectedViewIs('priorityReminder').show(
    <priorityReminder-view>

    </priorityReminder-view>
  )}
  {ifSelectedViewIs('reminder management').show(
    <reminder-management-view/>
  )}
  {ifSelectedViewIs('category management').show(
    <category-management-view>
      
    </category-management-view>
  )}
</personal-priorityReminder-app>