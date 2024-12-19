interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
  }
  
  export default function InputField({ label, error, ...props }: InputFieldProps) {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-medium text-foreground mb-1">{label}</label>
        <input
          className="border border-border rounded-md p-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          {...props}
        />
        {error && <span className="text-destructive text-sm mt-1">{error}</span>}
      </div>
    );
  }
  