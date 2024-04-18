import Image from "next/image";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ProductsTableProps } from "@/types/products";

const ProductsTable = ({ fetchedProducts }: ProductsTableProps) => {
  if (!fetchedProducts) return;

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Szűrő
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Szűrés</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Aktív</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Rejtett</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archivált</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Exportálás
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Új termék
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>Termékek</CardTitle>
            <CardDescription>
              Az összes termék listája. Itt tudsz szerkeszteni és törölni is
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <span className="sr-only">Kép</span>
                  </TableHead>
                  <TableHead>Név</TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Státusz
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">Ár</TableHead>
                  <TableHead className="hidden xl:table-cell">
                    Összes eladás
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Kategória
                  </TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Létrehozva
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fetchedProducts &&
                  fetchedProducts.map((product) => {
                    return (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="size-16 sm:size-24 lg:size-28 xl:size-32 size relative ">
                            <Image
                              src={product.image}
                              alt="profile"
                              objectFit="cover"
                              fill
                              className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-xs sm:text-base lg:text-lg">
                          {product.name}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell ">
                          <Badge variant="outline">(státusz)</Badge>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-nowrap">
                          {product.price} Ft
                        </TableCell>
                        <TableCell className="hidden xl:table-cell">
                          X
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product.category.name}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {product.dateCreated}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProductsTable;
