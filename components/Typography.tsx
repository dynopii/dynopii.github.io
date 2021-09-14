import React from 'react';
// currently not used specifically because unable to override classes 
interface Props {
  children: string;
  classNames?: string;
}

export const H1: React.FC<Props> = ({ children, classNames }) => {
  return (
    <h1 className={`text-h1 ${classNames || ''}`}>{children}</h1>
  );
};

export const H2: React.FC<Props> = ({ children, classNames }) => {
  return (
    <h2 className={`text-h2 ${classNames || ''}`}>{children}</h2>
  );
};

export const H3: React.FC<Props> = ({ children, classNames }) => {
  return (
    <h3 className={`text-h3  ${classNames || ''}`}>{children}</h3>
  );
};

export const H4: React.FC<Props> = ({ children, classNames }) => {
  return (
    <h4 className={`text-h4  ${classNames || ''}`}>{children}</h4>
  );
};

export const H5: React.FC<Props> = ({ children, classNames }) => {
  return (
    <h5 className={`text-h5 ${classNames || ''}`}>{children}</h5>
  );
};

export const H6: React.FC<Props> = ({ children, classNames }) => {
  return (
    <h6 className={`text-h6 ${classNames || ''}`}>{children}</h6>
  );
};

export const Button: React.FC<Props> = ({ children, classNames }) => {
  return (
    <p className={`text-button ${classNames || ''}`}>{children}</p>
  );
};

export const Subtitle: React.FC<Props> = ({ children, classNames }) => {
  return (
    <p className={`text-subtitle ${classNames || ''}`}>{children}</p>
  );
};

export const BodyLarge: React.FC<Props> = ({ children, classNames }) => {
  return (
    <p className={`text-body-lg ${classNames || ''}`}>{children}</p>
  );
};

export const BodySmall: React.FC<Props> = ({ children, classNames }) => {
  return (
    <p className={`text-body-sm  ${classNames || ''}`}>{children}</p>
  );
};


