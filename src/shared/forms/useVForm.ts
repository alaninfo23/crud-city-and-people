import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';

export const useVForm = () => {
  const formRef = useRef<FormHandles>(null);

  const IsSavingAndClose = useRef(false);
  const IsSavingAndNew = useRef(false);

  const handleSave = useCallback(() => {
    IsSavingAndClose.current = false;
    IsSavingAndNew.current = false;
    formRef.current?.submitForm();
  }, []);

  const handleSaveAndNew = useCallback(() => {
    IsSavingAndClose.current = false;
    IsSavingAndNew.current = true;
    formRef.current?.submitForm();
  }, []);

  const handleSaveAndClose = useCallback(() => {
    IsSavingAndClose.current = true;
    IsSavingAndNew.current = false;
    formRef.current?.submitForm();
  }, []);

  const handleIsSaveAndNew = useCallback(() => {
    return IsSavingAndNew.current;
  }, []);

  const handleIsSaveAndClose = useCallback(() => {
    return IsSavingAndClose.current;
  }, []);

  return {
    formRef,

    save: handleSave,
    saveAndNew: handleSaveAndNew,
    saveAndClose: handleSaveAndClose,

    IsSaveAndNew: handleIsSaveAndNew,
    IsSaveAndClose: handleIsSaveAndClose,
  };
};
