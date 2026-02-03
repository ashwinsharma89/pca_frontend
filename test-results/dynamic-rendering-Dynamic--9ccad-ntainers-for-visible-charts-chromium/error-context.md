# Page snapshot

```yaml
- generic [ref=e1]:
  - button "Open Next.js Dev Tools" [ref=e7] [cursor=pointer]:
    - img [ref=e8]
  - alert [ref=e11]
  - generic [ref=e12]:
    - generic [ref=e13]:
      - img [ref=e15]
      - text: PCA Agent
    - generic [ref=e18]:
      - generic [ref=e19]:
        - heading "Login" [level=3] [ref=e20]
        - paragraph [ref=e21]: Enter your credentials to access your account.
      - generic [ref=e22]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - generic [ref=e26]: Username or Email
            - textbox "Username or Email" [ref=e27]:
              - /placeholder: johndoe@example.com
              - text: test@example.com
          - generic [ref=e28]:
            - generic [ref=e29]: Password
            - textbox "Password" [active] [ref=e30]:
              - /placeholder: ••••••••
        - generic [ref=e31]:
          - button "Register" [ref=e32]
          - button "Login" [ref=e33]
  - region "Notifications alt+T"
```