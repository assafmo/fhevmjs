# API

## Instance

### createInstance

#### Parameters

- `params` (required):

  - `chainId` (required): Id of the chain
  - `publicKey` (required): Public key of the blockchain

#### Returns

- `ZamaWeb3Instance`

#### Example

```javascript
const instance = createInstance({ chainId: 9000, publicKey });
console.log(instance.chainId); // 9000
```

## Encryption

The library provides a set of functions to encrypt integers of various sizes (8, 16, and 32 bits) using the blockchain's public key. These encrypted integers can then be securely used as parameters for smart contract methods within the blockchain ecosystem.

### ZamaWeb3Instance.encrypt8

#### Parameters

- `value` (required): A number between 0 and 255.

#### Returns

- `CompactFheUint8List`

#### Example

```javascript
const instance = createInstance({ chainId: 9000, publicKey });
const encryptedParam = instance.encrypt8(14);
```

### ZamaWeb3Instance.encrypt16

#### Parameters

- `value` (required): A number between 0 and 65535.

#### Returns

- `CompactFheUint16List`

#### Example

```javascript
const instance = createInstance({ chainId: 9000, publicKey });
const encryptedParam = instance.encrypt16(1234);
```

### ZamaWeb3Instance.encrypt32

#### Parameters

- `value` (required): A number between 0 and 4294967295.

#### Returns

- `CompactFheUint32List`

#### Example

```javascript
const instance = createInstance({ chainId: 9000, publicKey });
const encryptedParam = instance.encrypt32(94839304);
```

## EIP-712 Token

The library provides a convenient function that generates a JSON object based on the EIP-712 standard. This JSON object includes a public key and is specifically designed to facilitate data reencryption in a smart contract environment.

By utilizing this JSON object and having it signed by the user, a secure process of reencrypting data becomes possible within a smart contract. The signed JSON includes the necessary information, including the public key, which allows for seamless reencryption of the data.

### ZamaWeb3Instance.generateToken

#### Parameters

- `options` (required):
  - `verifyingContract` (required): The address of the contract
  - `name` (optional): The name used in the EIP712
  - `version` (optional): The version used in the EIP712

#### Returns

- `ZamaWeb3Token`:

```typescript
{
  keypair: {
    publicKey: string;
    privateKey: string;
  }
  eip712: EIP712;
}
```

#### Example

```javascript
const instance = createInstance({ chainId: 9000, publicKey });
const encryptedParam = instance.generateToken({
  name: 'Authentication',
  verifyingContract: '0x1c786b8ca49D932AFaDCEc00827352B503edf16c',
});
```