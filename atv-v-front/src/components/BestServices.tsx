import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import ApiService from '@/services/ApiService';
import { Service } from "@/types/Service";
import { LoaderCircle } from "lucide-react";

export function BestServicesTable() {
  const apiService = new ApiService()
  const apiEndpoint = "private/orders"

  const [orders, setServices] = useState<{ service: Service; totalSold: number }[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      setIsInitialLoading(true)
      try {
        const [ordersResponse] = await Promise.all([
          apiService.get(`${apiEndpoint}/topServices`),
          new Promise(resolve => setTimeout(resolve, 1500))
        ]);

        setServices(Array.isArray(ordersResponse.data) ? ordersResponse.data : [])
      } catch (error) {
        console.error('Error fetching data:', error)
        setServices([])
      } finally {
        setIsInitialLoading(false)
      }
    }

    fetchServices()
  }, []);

  return (
    <Card className='max-h-[70vh] flex flex-col'>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className='text-2xl'>Serviços Mais Vendidos</CardTitle>
          <button className="text-blue-700 hover:underline">Ver todos</button>
        </div>
        
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {isInitialLoading ? (
          <div className="flex-1 flex justify-center items-center h-64 min-h-[40vh]">
            <LoaderCircle className="animate-spin h-8 w-8" />
          </div>
        ) : (
          <>
      <Table>
        <TableHeader>
          <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Preço Unitário</TableHead>
              <TableHead>Qtd Vendida</TableHead>
              <TableHead>Valor Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.service.name} className="border-t">
                <TableCell className="py-3 font-medium">{order.service.name}</TableCell>
                <TableCell className="py-3 font-medium">R$ {order.service.price.toFixed(2)}</TableCell>
                <TableCell className="py-3 font-medium">{order.totalSold}</TableCell>
                <TableCell className="py-3 font-medium">R$ {(order.service.price * order.totalSold).toFixed(2) }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </>
          )}
      </CardContent>
      </Card>
  )
}

