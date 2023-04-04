<!-- -------------Question 1A-------------- -->

Do a component breakdown analysis and list out the components you discovered

<!-- ------Answer----------------- -->

<GoogleApp Component/> contains
{

<Header Component />
<SearchSection Component/>
<Footer  Component/>}

<Header  Component/> consisit of 
{
    <MenuItem Component /> which holds  =>Gmail Link
        <MenuItem  Component/> which holds => Images Link
            <AppLauncher  Component/> => The App Logo
                    <UserImage Component /> => User Image}

<SearchSection Component / > consist of
{
<Logo  Component/> holds Google logo
<SearchBar Component/> holds input
<Button Component  /> holds =>Google search button
<Button  Component/> holds=> I' m feeling lucky button
<Language Link  Component/> holds =>google offered in : hausa, igbo, ede-yoruba, pidgin
}

< Footer Component /> consist of
{
<Location Component /> holds Nigeria;

<MenuItem Componet>(reused Component)=> About link
<MenuItem Componet>(reused Component)=> Advertising link
<MenuItem Componet>(reused Component)=> Business link
<MenuItem Componet>(reused Component)=> How Search Work link
<FooterText Component> holds => carbon neutral since 2007 and a logo
<MenuItem Componet>(reused Component)=> About link
<MenuItem Componet>(reused Component)=> Advertising link
<MenuItem Componet>(reused Component)=> Business link

}

<GoogleApp />
 [   <Header />: [ <MenuItem /><MenuItem /><AppLauncher /><UserImage />],
<SearchSection/>:[ <Logo /><SearchBar /> <Button /> <Button /> <LanguageLink />],
<Footer/>: [<Language /> <MenuItem /><MenuItem /><MenuItem /><MenuItem /><FooterText/><MenuItem /><MenuItem /><MenuItem />]
]
