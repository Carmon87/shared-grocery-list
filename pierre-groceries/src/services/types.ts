export interface InputGroceryChild {
    pendingItemList: string[];
    setItemList: React.Dispatch<React.SetStateAction<string[]>>;
  }

 
export type DeleteGrocery = (grocery: string) =>void;
export interface ItemChild {
    grocery:string;
    key?:number;
    index:number;
    deleteGrocery:DeleteGrocery;
    purchase: DeleteGrocery;
    icon: React.ReactNode
};