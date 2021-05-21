import styled from "styled-components";
import { motion } from "framer-motion";


export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 13px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: rgb(1, 121, 111);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 14px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(1, 121, 111);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 40%;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(1, 121, 111);
  background: linear-gradient(
    58deg,
    rgba(1, 121, 111, 1) 20%,
    rgba(0, 123, 111, 1) 100%
  );
  margin-top: 20px; 

  &:hover {
    filter: brightness(1.03);
  }
`;

export const OuterBoxContainer = styled.div`
  width: 480px;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: 70px;
  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export const BackDrop = styled(motion.div)`
  width: 123%;
  height: 510px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(20deg);
  top: -340px;
  left: -103px;
  background: rgb(1, 121, 111);
  background: linear-gradient(
    58deg,
    rgba(1, 121, 111, 1) 20%,
    rgba(0, 123, 111, 1) 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 34px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;