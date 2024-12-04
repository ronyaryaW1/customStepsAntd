import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};


export default function ReactHookForm() {
    const { register, handleSubmit, watch } = useForm<Inputs>();
    const [emails, setEmail] = useState<string[]>([])
    const onSubmit: SubmitHandler<Inputs> = data => console.log({ data, emails });
    const [currentEmail, setCurrentEmail] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentEmail(e.target.value);
    };
    const handleRemoveEmail = (index: number) => {
        setEmail(prevEmails => prevEmails.filter((_, i) => i !== index));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="email" {...register("example")} onChange={handleInputChange} />
                <input type="submit" />
                <div onClick={() => setEmail((prev) => [...prev, watch("example")])} > submit with watch</div>
                <div onClick={() => setEmail((prev) => [...prev, currentEmail])} > submit with onchange</div>
            </form>
            {emails.map((email, index) => (
                <div style={{ display: 'flex', gap: '8px', width: '100%', justifyContent: 'center', marginTop: 50 }}>
                    <p>{email}</p>
                    <div onClick={() => handleRemoveEmail(index)} style={{ cursor: 'pointer' }}>x</div>
                </div>
            ))}
        </div>
    );
}
