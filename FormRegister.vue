.form-login {
   width: 100%;
   max-width: 500px;
   margin: 0 auto;
   padding: 2.5em;
   color: #1a1a1a;
   background: rgba(255, 255, 255, 0.95);
   border-radius: 16px;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(8px);
   -webkit-backdrop-filter: blur(8px);
}

.form-title {
   text-align: center;
   margin-bottom: 1.5em;
   font-size: 1.75em;
   font-weight: 600;
   color: #2d3748;
}

.success-message {
   background: linear-gradient(135deg, #34d399 0%, #059669 100%);
   color: white;
   padding: 1em;
   border-radius: 8px;
   margin-bottom: 1.5em;
   text-align: center;
   font-weight: 500;
   animation: slideDown 0.3s ease-out;
}

.form-input-check {
   margin: 1.5em 0;
   display: flex;
   flex-direction: column;
   gap: 0.75em;
}

.form-input-check__input {
   margin-right: 12px;
   width: 20px;
   height: 20px;
   cursor: pointer;
   accent-color: #4f46e5;
}

.checkbox-label {
   display: flex;
   align-items: center;
   cursor: pointer;
   color: #4b5563;
   font-size: 0.95em;
}

.privacy-links {
   font-size: 0.9em;
   color: #6b7280;
   line-height: 1.5;
}

.privacy-link {
   color: #4f46e5;
   font-weight: 500;
   cursor: pointer;
   transition: color 0.2s;
}

.privacy-link:hover {
   color: #4338ca;
   text-decoration: underline;
}

.btn-submit {
   width: 100%;
   padding: 0.875em;
   border: none;
   border-radius: 8px;
   background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
   color: white;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.5em;
}

.btn-submit:not(:disabled):hover {
   background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
   transform: translateY(-1px);
   box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.btn-submit:disabled {
   background: #e5e7eb;
   cursor: not-allowed;
}

.form-error {
   color: #ef4444;
   font-size: 0.875em;
   margin-top: 0.25em;
}

.loader {
   width: 20px;
   height: 20px;
   border: 2px solid #fff;
   border-radius: 50%;
   border-top-color: transparent;
   animation: spin 0.8s linear infinite;
}

@keyframes spin {
   to {
      transform: rotate(360deg);
   }
}

@keyframes slideDown {
   from {
      opacity: 0;
      transform: translateY(-10px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}

@media (max-width: 640px) {
   .form-login {
      padding: 1.5em;
      margin: 0 1em;
   }
   
   .form-title {
      font-size: 1.5em;
   }
} 