type StackProps = {
  title: string
  children: React.ReactNode
}

export const Stack: React.FC<StackProps> = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

type DescriptionProps = {
  title: string
  subtitle: React.ReactNode
  children: React.ReactNode
}

export const Description: React.FC<DescriptionProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <p>{children}</p>
    </>
  )
}
