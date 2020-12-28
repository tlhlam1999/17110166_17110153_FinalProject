export class Dataset {
    //Blog
    public static IdBlog:string=''    
    public static IdTopic:string=''    
    public static IdUser:string=''    
    public static IdComposer:string=''    
    public static Heading:string=''    
    public static Description:string=''    
    public static Image:string=''    
    public static DisabledBlog:boolean;  
    //Brand
    public static IdBrand:string=''    
    public static BrandName:string=''    
    public static DescriptionBrand:string=''    
    public static DisabledBrand:boolean;
    //CommentBlog
    public static IdCmtBlog:string=''    
    public static IDBlog:string=''    
    public static DescriptionCmtBlog:string=''    
    public static ImageCmtBlog:string=''  
    public static TimeCmtBlog: Date
    public static DisabledCmtBlog:boolean;
    //CommentProduct
    public static IdCmtProduct:string=''    
    public static IDProduct:string=''    
    public static DescriptionCmtProduct:string=''    
    public static ImageCmtProduct:string=''  
    public static TimeCmtProduct: Date
    public static DisabledCmtProduct:boolean;
    //IngredientDetail
    public static IdIngre:string=''    
    public static NameIngre:string=''    
    public static Uses:string=''    
    public static Function:string=''  
    public static PointIngre: Float32Array
    //IngreProduct
    public static Id3CodeProduct:string=''    
    public static IdIngreDetail:string=''    
    //Point
    public static IdPoint:string=''    
    public static IdSkin:string=''    
    public static PAcneType: Float32Array
    public static PPastUsing: Float32Array
    public static PDailyHabit: Float32Array
    public static PTotal: Float32Array
    public static PMealHabit: Float32Array
    //Product
    public Id3Code:string=''    
    public IdBrandPro:string=''    
    public IdSkinPro:string=''    
    public NameProduct:string=''  
    public DescriptionPro:string=''    
    public ImagePro:string='' 
    public PointPro: Float32Array
    public DisabledPro:boolean;
    //SkinType
    public static IdSkinType:string=''    
    public static NameSkinType:string=''    
    public static DescriptionSkinType:string=''    
    public static DisabledSkinType:boolean;
    //TopicBlog
    public static IdTopicBlog:string=''    
    public static NameTopicBlog:string=''     
    public static DisabledTopicBlog:boolean;
     //User
     public static IDUser:string=''    
     public static IDPoint:string=''     
     public static FirstName:string=''    
     public static LastName:string=''     
     public static UserName:string=''    
     public static Pass:string=''     
     public static Mail:string=''    
     public static Phone:string=''    
     public static Avatar:string=''      
     public static Male:boolean;
     public static Authen:boolean;
}