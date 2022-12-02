export interface InputGroceryChild {
    pendingItemList: string[];
    setItemList: React.Dispatch<React.SetStateAction<string[]>>;
  }

 
export type DeleteGrocery = (index: number) =>void;
export interface ItemChild {
    grocery:string;
    key?:number;
    index:number;
    deleteGrocery:DeleteGrocery; 

}