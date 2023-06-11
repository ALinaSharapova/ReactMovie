function Picture(props){
  const user = {
    name: 'Not found 404',
    imageUrl: 'https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg',
  }
  return (
    <img 
          src={user.imageUrl}
          alt = {'Photo of ' + user.name}
          className="pic"
    />
  )
}
  export { Picture };
