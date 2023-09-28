import { type ContactSchema } from "@/types/contact";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

export const ContactEmail: React.FC<Readonly<ContactSchema>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>{message}</Preview>
    <Tailwind>
      <Body className="mx-auto my-auto bg-white font-sans">
        <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
          <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
            New message from <strong>{name}</strong> ({email})
          </Heading>
          <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
          <Text className="text-[14px] leading-[24px] text-black">
            {message}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
