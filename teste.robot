** Settings **
Library  SeleniumLibrary

** Variables **
${SITE_QAZANDO}  https://automationpratice.com.br/
${EMAIL}  qazando@gmail.com
${PASSWORD}  123456  

** Keywords **
Acess qazando site
    Open Browser  ${SITE_QAZANDO}  chrome

Click login option
    Click Element  xpath://a[@href='/login']
    
Wait site loading
    Sleep  8s

Type email
    Input Text  id:user  ${EMAIL}

Wait typing
    Sleep  4s

Type Password
    Input Text  id:password  ${PASSWORD}

Click login
    Click Element  id:btnLogin


** Test Cases **
Assert: Login successful 
    [Tags]  Regressive
    Acess qazando site
    Wait site loading
    Click login option
    Wait site loading
    Type email
    Wait typing
    Type Password
    Wait typing
    Click login
    Wait site loading
