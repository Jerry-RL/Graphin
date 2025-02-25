import type { GraphData } from '@antv/g6';
import type { Metadata } from './metadata';

/**
 * 数据集基础类型
 */
export interface BaseDataset {
  /**
   * 数据集 ID
   */
  id: string;
  /**
   * 数据集元数据
   */
  metadata: Metadata;
}

/**
 * 静态数据源类型
 */
export interface LocalDatasetSchema<D extends GraphData = GraphData> extends BaseDataset {
  /**
   * 数据类型
   */
  type: 'local';
  /**
   * 图数据
   */
  data: D;
}

/**
 * 动态数据源类型
 */
export interface RemoteDatasetSchema extends BaseDataset {
  /**
   * 数据类型
   */
  type: 'remote';
  /**
   * 关联的服务类型
   */
  serviceType: string;
  /**
   * 服务属性配置
   */
  properties: Record<string, unknown>;
}

export type DatasetSchema = LocalDatasetSchema | RemoteDatasetSchema;
