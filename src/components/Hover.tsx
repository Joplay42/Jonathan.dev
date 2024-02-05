import { CiCircleInfo } from "react-icons/ci";

interface Props {
    description: string;
}

const Hover = ({ description }: Props) => {
    return (
        <div className="absolute leading-5 rounded-2xl bottom-24 right-1/2 transform translate-x-1/2 bg-white dark:shadow-none dark:bg-neutral-800 dark:border dark:border-neutral-700 shadow-lg shadow-neutral-300 border border-neutral-300 p-10 w-80">
            <div className="lg:grid lg:grid-cols-6">
                <CiCircleInfo className="hidden lg:block w-5 mb-2 h-auto text-neutral-600 dark:text-neutral-400"/>
                <p className="col-span-5">{description}</p>
            </div>
        </div>
    )
}

export default Hover;