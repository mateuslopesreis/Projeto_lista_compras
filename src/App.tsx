import { Apple, Badge, Carrot, Drumstick, EllipsisVertical, GlassWater, Option, Store,   } from "lucide-react"
import { useState } from "react";
import { Input, Menu, Select, Table, Theme } from 'react-daisyui';
import { Button, Checkbox, Mask } from "react-daisyui"




function App() {



  return (

    <>

<header className="bg-[url('/componentes/fundo.png')]">
      </header>
     
     <div className="flex flex-row">
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
      <label className="label">
          <span className="label-text">Item</span>
        
        </label>
        
      <Input  />
      </div>
    </div>


    <div className="flex flex-row">
    <div className="form-control w-full max-w-xs">
      <label className="label">
          <span className="label-text">Quantidade</span>
        
        </label>
        
    <Menu>
    <div className="flex flex-row">
      <Menu.Item>
        <a>1</a>
      </Menu.Item>
      <Menu.Item>
        <Menu.Details open={true} label={'Un.'}>
          <Menu.Item>
            <a>2</a>
          </Menu.Item>
          <Menu.Item>
            <a>3</a>
          </Menu.Item>
         
          
        </Menu.Details>
      </Menu.Item>
     </div>
    </Menu>
    </div>
    </div>




    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Categoria</span>
        
        </label>
        <Select defaultValue={'default'} >
          <Option values={'default'} >
            Pick one
          </Option>
          <Option values="Star Wars">Star Wars</Option>
          <Option values="Harry Potter">Harry Potter</Option>
          <Option values="Lord of the Rings">Lord of the Rings</Option>
          <Option values="Planet of the Apes">Planet of the Apes</Option>
          <Option values="Star Trek">Star Trek</Option>
        </Select>
      </div>
    </div>



    </div>

   


<div className="flex justify-items-center">
      <Table size="md" className="w-15" >

        <Table.Body >
          <Table.Row>
            <Checkbox />
           
              
              <div>
                <div className="font-bold">Maça</div>
                <div className="text-sm opacity-50">2 unidades</div>
              
            </div>
            
            <div></div>

            <div className="flex justify-center">
            <Button color="secondary" size="xs">
            <Apple />
              fruta
            </Button>
            <EllipsisVertical />
            </div>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            
              <div>
                <div className="font-bold">Pão Frances</div>
                <div className="text-sm opacity-50">4 unidades</div>
              </div>
            
              <div></div>
           
              <div className="flex justify-center">
            <Button color="ghost" size="xs">
            <Store />
              padaria
            </Button>
            <EllipsisVertical />
            </div>
          </Table.Row>

          <Table.Row>
            <Checkbox />
           
              <div>
                <div className="font-bold">Brócolis</div>
                <div className="text-sm opacity-50">1 unidade</div>
              </div>
            
            
            <div></div>
            <div className="flex justify-center">
            <Button color="ghost" size="xs">
            <Carrot />
              legume
            </Button>
            <EllipsisVertical />
            </div>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            
              <div>
                <div className="font-bold">Leite</div>
                <div className="text-sm opacity-50">2 litros</div>
              </div>
            
           
            <div></div>
            <div className="flex justify-center">
            <Button color="ghost" size="xs">
            <GlassWater />
              bebida
            </Button>
            <EllipsisVertical />
            </div>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            
              <div>
                <div className="font-bold">Peito de Frango</div>
                <div className="text-sm opacity-50">2KG</div>
              </div>
            
           
            <div></div>
            <div className="flex justify-center">
            <Button color="primary" size="xs">
            <Drumstick />
              carne
            </Button>
            <EllipsisVertical />
            </div>
          </Table.Row>
        </Table.Body>

        
      </Table>
    </div>


    </>
  )
}

export default App
