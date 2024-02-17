import Header from "@/components/shared/header"
import TransformationForm from "@/components/shared/transformation-form";
import { transformationTypes } from "@/constants" 


const AddTransformationTypePagepage = ({ params: { type }}: SearchParamProps) => {
    const transformation = transformationTypes[type];

    return (
        <>
            <Header 
                title={transformation.title}
                subtitle={transformation.subTitle}
            />
            <TransformationForm />
        </>
    )
}

export default AddTransformationTypePagepage