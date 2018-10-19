const initialState = {
    inventory: [
      {
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dhresource.com%2Falbu_269291508_00-1.0x0%2Ftall-classical-blue-canvas-shoes-couple-canvas.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fstore%2Fproduct%2Ftall-classical-blue-canvas-shoes-couple-canvas%2F143306161.html&docid=bLNthxdIKWs-FM&tbnid=uwQRYcYAgOztiM%3A&vet=10ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI..i&w=675&h=577&bih=1007&biw=1920&q=shoes&ved=0ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI&iact=mrc&uact=8',
        name: "Red Chucks",
        price: 23
      },
      {
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dhresource.com%2Falbu_269291508_00-1.0x0%2Ftall-classical-blue-canvas-shoes-couple-canvas.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fstore%2Fproduct%2Ftall-classical-blue-canvas-shoes-couple-canvas%2F143306161.html&docid=bLNthxdIKWs-FM&tbnid=uwQRYcYAgOztiM%3A&vet=10ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI..i&w=675&h=577&bih=1007&biw=1920&q=shoes&ved=0ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI&iact=mrc&uact=8',
        name: "Red Chucks",
        price: 23
      },
      {
        imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dhresource.com%2Falbu_269291508_00-1.0x0%2Ftall-classical-blue-canvas-shoes-couple-canvas.jpg&imgrefurl=https%3A%2F%2Fwww.dhgate.com%2Fstore%2Fproduct%2Ftall-classical-blue-canvas-shoes-couple-canvas%2F143306161.html&docid=bLNthxdIKWs-FM&tbnid=uwQRYcYAgOztiM%3A&vet=10ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI..i&w=675&h=577&bih=1007&biw=1920&q=shoes&ved=0ahUKEwjVuIOko5HeAhXC5p8KHc6jBfIQMwi2ASgSMBI&iact=mrc&uact=8',
        name: "Red Chucks",
        price: 23
      }
   ]     
    
    
 }
 
 const Get_All_INVENTORY = "Get_All_INVENTORY";
 

 
 function reducer( state = initialState, action ) { 
     console.log('REDUCER HIT: Action ->', action );
     
     switch( action.type ){
       case Get_All_INVENTORY:
         return Object.assign( {}, state, { inventory: action.payload } );
 
 
         default: return state;
        }
    } 
    
    export function getAllInventory( inventory ){
      return {
        type: Get_All_INVENTORY,
        payload: inventory
      };
    }
    
    // export function updatePropertyType( property ) {
    //   return {
    //     type: UPDATE_PROPERTY_TYPE,
    //     payload: property
    //   };
    // }
    
    export default reducer; 