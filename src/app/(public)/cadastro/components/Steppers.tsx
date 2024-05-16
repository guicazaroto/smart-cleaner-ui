export default function Steppers ({ step }: any) {
  const borderColor = (stepTag: number) => step === stepTag ? 'border-blue-500' : 'border-gray-300';
  const textColor = (stepTag: number) => step === stepTag ? 'text-blue-500' : 'text-gray-500';

  return (
    <div className="max-w-4xl mx-auto">
    <div className="flex justify-around items-center mb-8">
      <div className={`step flex items-center`}>
        <div 
          className={`${borderColor(1)} ${textColor(1)} step-number flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold`}>
            1
          </div>
        <div className={`${textColor(1)} ml-2 text-sm font-semibold text-blue-500`}>Credenciais</div>
      </div>
      <div className={`step flex items-center`}>
        <div 
          className={`${borderColor(2)} ${textColor(2)} step-number flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold`}>
            2
          </div>
        <div className={`${textColor(2)} ml-2 text-sm font-semibold text-gray-500`}>Perfil</div>
      </div>
    </div>
  </div>
  )
}