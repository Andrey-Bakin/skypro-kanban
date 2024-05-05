import styled from "styled-components";
import { Hover01, Hover03 } from "../../styles/shared";
import { topicStyles } from "../../../lib/topic";
import { css } from "styled-components";

export const PopBrowse = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`;

export const PopBrowseContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 720px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`;

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
    opacity: 1;
`;

export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const CategoriesThemeTop = styled.div`
    opacity: 1 !important;
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    
    background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#94a6be"};
    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
        color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#ffffff"};
    }
`;

export const PopBrowseStatus = styled.div`
    margin-bottom: 11px;
`;

export const PopBrowseStatusP = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const PopBrowseStatusThemeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    
`;

export const PopBrowseStatusTheme = styled.div`
    cursor: pointer;
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    &  p {
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
    }
    ${({ isactived }) =>
    isactived &&
    css`
      opacity: 1;
      background-color: #94a6be;
      color: #fff;
    `}
    background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "##ffffff"};
    box-sizing: border-box;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 24px;
`;

export const PopBrowseStatusActiveTheme = styled(PopBrowseStatusTheme)`
    color: #ffffff;
    background: rgb(148, 166, 190);
`;

export const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseLabel = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #EAEEF6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 285px;
    &::-moz-placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    &::placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
`;

export const PopBrowseBtnBrowse = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    & button {
        margin-right: 8px;
        height: 30px;
        margin-bottom: 10px;
        padding: 0 14px;
    }
`;

export const ButtonGroup = styled.div`
    & button {
        margin-right: 8px;
    }
`;

export const ButtonEditDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${Hover03}
`;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${Hover01}
`;