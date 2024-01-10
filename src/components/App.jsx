const jacob = {
  id: '1',
  name: "Jacob Gluke",
  email: 'j.Merser@gmail.com',
	age: 32,
	avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
};





export const App = () => {
  return <div>
		<div> 
<p><b>User name:</b> {jacob.name}</p>
<p><b>E-mail:</b>{jacob.email}</p>
<p><b>Age:</b>{jacob.age}</p>
<img src = {jacob.avatar} alt = {jacob.name} width="80" height="80"/>
</div>
	</div>;
};