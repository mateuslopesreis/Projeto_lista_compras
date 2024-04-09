import { Apple, Badge, Carrot, Drumstick, EllipsisVertical, GlassWater, Store,   } from "lucide-react"
import { Table, Theme } from 'react-daisyui';
import { Button, Checkbox, Mask } from "react-daisyui"




function App() {

  return (

    <>



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
