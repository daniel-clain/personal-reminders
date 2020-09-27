
<personal-quiz-app>
  <view-selectors>
    <view-selector 
      onSelect={setView('quiz')} 
      name='Quiz'/>
    <view-selector 
      onSelect={setView('question management')} 
      name='Question Management'/>
    <view-selector 
      onSelect={setView('category management')} 
      name='Category Management'/>
  </view-selectors>

  {ifSelectedViewIs('quiz').show(
    <quiz-view>

    </quiz-view>
  )}
  {ifSelectedViewIs('question management').show(
    <question-management-view/>
  )}
  {ifSelectedViewIs('category management').show(
    <category-management-view>
      
    </category-management-view>
  )}
</personal-quiz-app>